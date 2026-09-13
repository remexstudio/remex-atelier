"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  askPresets,
  seedLog,
  type AskPreset,
  type AuditEntry,
  type Citation,
} from "@/components/northline/data";

const STORAGE_KEY = "northline-ledger-demo-v1";

type TicketStatus = "idle" | "proposed" | "approved" | "rejected";

type StoredState = {
  log: AuditEntry[];
  lastAnswerId: string | null;
  lastCitations: Citation[];
  ticketStatus: Record<string, TicketStatus>;
};

type NorthlineContextValue = {
  ready: boolean;
  log: AuditEntry[];
  lastAnswer: AskPreset | null;
  lastCitations: Citation[];
  ticketStatus: Record<string, TicketStatus>;
  submitAsk: (presetId: string) => void;
  proposeChange: (changeId: string, title: string) => void;
  decideChange: (
    changeId: string,
    title: string,
    decision: "approval" | "rejection",
  ) => void;
};

const NorthlineContext = createContext<NorthlineContextValue | null>(null);

function makeId(prefix: string): string {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

function defaultState(): StoredState {
  return {
    log: seedLog,
    lastAnswerId: null,
    lastCitations: [],
    ticketStatus: {},
  };
}

export function NorthlineProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<StoredState>(defaultState);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as StoredState;
        setState({
          log: Array.isArray(parsed.log) ? parsed.log : seedLog,
          lastAnswerId: parsed.lastAnswerId ?? null,
          lastCitations: Array.isArray(parsed.lastCitations)
            ? parsed.lastCitations
            : [],
          ticketStatus: parsed.ticketStatus ?? {},
        });
      }
    } catch {
      setState(defaultState());
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore quota */
    }
  }, [ready, state]);

  const submitAsk = useCallback((presetId: string) => {
    const preset = askPresets.find((item) => item.id === presetId);
    if (!preset) return;
    setState((prev) => ({
      ...prev,
      lastAnswerId: preset.id,
      lastCitations: preset.citations,
      log: [
        {
          id: makeId("LOG"),
          at: new Date().toISOString(),
          kind: "ask",
          summary: `Asked: ${preset.question}`,
          detail: `Cited ${preset.citations.map((c) => c.sourceId).join(", ")}`,
        },
        ...prev.log,
      ],
    }));
  }, []);

  const proposeChange = useCallback((changeId: string, title: string) => {
    setState((prev) => ({
      ...prev,
      ticketStatus: { ...prev.ticketStatus, [changeId]: "proposed" },
      log: [
        {
          id: makeId("LOG"),
          at: new Date().toISOString(),
          kind: "proposal",
          summary: `Proposed ${changeId}: ${title}`,
          detail: "Awaiting Approve or Reject — clerk cannot Execute",
        },
        ...prev.log,
      ],
    }));
  }, []);

  const decideChange = useCallback(
    (
      changeId: string,
      title: string,
      decision: "approval" | "rejection",
    ) => {
      setState((prev) => ({
        ...prev,
        ticketStatus: {
          ...prev.ticketStatus,
          [changeId]: decision === "approval" ? "approved" : "rejected",
        },
        log: [
          {
            id: makeId("LOG"),
            at: new Date().toISOString(),
            kind: decision,
            summary:
              decision === "approval"
                ? `Approved ${changeId}: ${title}`
                : `Rejected ${changeId}: ${title}`,
            detail:
              decision === "approval"
                ? "Human gate passed · still no Execute in this demo"
                : "Human gate declined · ticket retained in log",
          },
          ...prev.log,
        ],
      }));
    },
    [],
  );

  const lastAnswer = useMemo(
    () => askPresets.find((item) => item.id === state.lastAnswerId) ?? null,
    [state.lastAnswerId],
  );

  const value = useMemo<NorthlineContextValue>(
    () => ({
      ready,
      log: state.log,
      lastAnswer,
      lastCitations: state.lastCitations,
      ticketStatus: state.ticketStatus,
      submitAsk,
      proposeChange,
      decideChange,
    }),
    [
      ready,
      state.log,
      state.lastCitations,
      state.ticketStatus,
      lastAnswer,
      submitAsk,
      proposeChange,
      decideChange,
    ],
  );

  return (
    <NorthlineContext.Provider value={value}>
      {children}
    </NorthlineContext.Provider>
  );
}

export function useNorthline(): NorthlineContextValue {
  const ctx = useContext(NorthlineContext);
  if (!ctx) {
    throw new Error("useNorthline must be used within NorthlineProvider");
  }
  return ctx;
}
