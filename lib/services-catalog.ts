/** V5 /services catalog — English locks from docs/ia-v5.md §2 and docs/copy-locks.md. */

export const TRUST_STANCE =
  "Client data is used to do the job, not to train a Remex foundation model. Irreversible actions stay behind a named person. Every proposal keeps a reopenable record.";

export const ENGAGEMENT_LABELS = [
  "Start a brief",
  "Design job+gate",
  "Ship first seat",
  "Operate / decide second seat",
] as const;

export const ENGAGEMENT_BEATS = [
  {
    label: "Start a brief",
    meaning:
      "Buyer names the painful workflow, who approves, what the agent may never do, and what record must stay.",
  },
  {
    label: "Design job+gate",
    meaning:
      "Studio writes the job and the gate; refuse if the seat should not be an agent.",
  },
  {
    label: "Ship first seat",
    meaning:
      "Build the Propose → Approve → Record loop for that seat only.",
  },
  {
    label: "Operate / decide second seat",
    meaning:
      "Tighten evals, gates, and records; a second seat opens only if the first gate holds.",
  },
] as const;

export const CATALOG_MAY = [
  "Draft",
  "Retrieve",
  "Route",
  "Classify",
  "Queue",
] as const;

export const CATALOG_MAY_NOT = [
  "Silently move money",
  "Silently publish",
  "Silently delete",
  "Execute irreversible work without a named person",
  "Cross the gate drawn in the brief",
] as const;

export const CATALOG_LINES = [
  {
    id: "design",
    name: "Agent product design",
    who: "The founder, ops lead, or GM who owns the broken desk — and the named person who will approve.",
    deliverable:
      "A written job: who sits in the seat, what arrives, what “done” looks like, and the gate the agent cannot cross.",
    refuse:
      "A vague assistant for everything. A seat with no named approver. Work that should not be an agent.",
    done: "Job and gate agreed. The brief is ready to build. No silent execution.",
    note: "Design happens before tools enter the room. If a smaller tool is the honest answer, say so.",
  },
  {
    id: "build",
    name: "Agent build",
    who: "The desk that owns one painful workflow — one agent, one gate. Not a platform. Not four SKUs.",
    deliverable:
      "The Propose → Approve → Record loop for the first seat. A human still decides.",
    refuse:
      "Silently move money, silently publish, silently delete, execute irreversible work without a named person, or cross the gate drawn in the brief.",
    done: "The first seat ships. The agent may draft, retrieve, route, classify, and queue — nothing irreversible without a named person.",
    note: "The agent proposes. A person approves. The record stays.",
  },
  {
    id: "operations",
    name: "Agent operations",
    who: "The same desk after the first seat ships.",
    deliverable:
      "Evals against the job, not against a generic model scoreboard. Tighten the gate where the desk still flinches. Improve the record so a proposal can be reopened.",
    refuse:
      "An hours factory or staffed body shop. A next seat before the first gate holds.",
    done: "The first gate holds. A next seat opens only then.",
    note: "Operations is not an hours factory and not a staffed body shop.",
  },
] as const;

export const FOR_WHOM = [
  "A founder, ops lead, or GM whose desk already feels broken",
  "One painful workflow with a human who must stay in the loop",
  "A seat that does not fit a Copilot Studio / Agentforce / Big-4 template",
] as const;

export const NOT_FOR = [
  "An hours factory or staffed body shop",
  "A generic chatbot or chatbot widget",
  "“ChatGPT for X” as an offer",
  "A cloud-migration mill or outsourcing body shop",
  "Replacing the client team",
  "Buyers who want a four-SKU catalog or a platform of templates",
  "Compliance theater (SOC 2 / ISO badges we do not have)",
] as const;

export const SERVICES_FAQ = [
  {
    q: "How is this different from a platform?",
    a: "They sell a platform. Remex designs the job and the gate for a seat that does not fit a template.",
  },
  {
    q: "Do you sell four agents?",
    a: "No. The four desks on the site are selected examples — proof of method, not the catalog. Each brief is a different job.",
  },
  {
    q: "What happens after the first seat?",
    a: "We run evals against the job, tighten the gate, and improve the record so a proposal can be reopened. A next seat opens only when the first gate holds.",
  },
  {
    q: "How is risk held?",
    a: "Propose → Approve → Record. A human still decides. Irreversible actions stay behind a named person. Every proposal keeps a reopenable record.",
  },
  {
    q: "How do we start?",
    a: "Start a brief. Which workflow hurts. Who approves. What the agent may never do. What record you must keep.",
  },
] as const;
