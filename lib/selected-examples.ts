/** V5 Selected examples — English locks from docs/ia-v5.md §3 and docs/copy-locks.md. */

export const INDEX_LABEL = "Selected examples";

export const EXAMPLE_CLOSER =
  "This is one seat. The next brief will be a different job.";

export const STUDY_FOOTER = "Studio study. Client identity anonymized.";

export const START_A_BRIEF = "Start a brief.";

export const OTHER_SEATS_HEADING = "Other seats this method fits";

export const OTHER_SEATS_NOTE = "Method fits — not shipped products.";

export const OTHER_SEATS = [
  "Support triage",
  "Vendor onboarding",
  "Invoice exceptions",
  "Sales follow-up",
  "Internal policy Q&A",
] as const;

export const EXAMPLES = [
  {
    slug: "atelier-concierge",
    href: "/work/atelier-concierge",
    display: "Demand desk",
    gateFact: "Human before pay",
    still: "still-a" as const,
  },
  {
    slug: "ledger-clerk",
    href: "/work/ledger-clerk",
    display: "Knowledge desk",
    gateFact: "Human before execute corpus change",
    still: "still-b" as const,
  },
  {
    slug: "morning-remex",
    href: "/work/morning-remex",
    display: "Attention desk",
    gateFact: "Priority / Watch / Noise; human before send",
    still: "still-c" as const,
  },
  {
    slug: "exception-copilot",
    href: "/work/exception-copilot",
    display: "Exception desk",
    gateFact: "Human before money moves",
    still: "still-d" as const,
  },
] as const;

export const INDEX_LEDE =
  "Proof of method. Four seats, each with a distinct job, gate, and record — not a catalog of products.";

export const DEMAND = {
  display: "Demand desk",
  seat: "High-touch demand / concierge desk",
  constraint:
    "Skin, occasion, and fit notes scatter across fittings, holds, and aftercare.",
  description:
    "A high-touch demand desk: occasion maps to one hero, a try-on still, and a drafted bag. A human stands before pay.",
  narrative: [
    "The demand desk is the high-touch seat that greets a client who already knows the house and who expects the next step to be one garment, not a rack of options. The person in the chair is a stylist or concierge lead. The buyer who hired the seat is usually a founder or general manager who already feels the floor break: fittings run long, holds go stale, and aftercare notes never return to the next appointment. The constraint is not taste. The constraint is scatter. Skin notes live in one book. Occasion notes live in another. Fit lives in a third place that only the person who took the last appointment can reconstruct. When a client sits down, the desk rebuilds the next step from fragments.",
    "We designed the job as a single next step, not as a search. A platform assistant would retrieve options and leave the stylist to choose among them. This seat is not allowed a pile. Occasion maps to one hero. The agent may read the consult thread, the last hold, and the aftercare note, then name one piece that fits the person in the chair. It may stage a try-on still so the stylist sees a garment rather than a sentence. It may draft the bag — the set of items the house would actually place on the counter — and stop there. Those three abilities are the whole permission. They do not retrieve a fixed corpus, sort overnight mail, or rank a refund queue. They belong to demand, and only to demand.",
    "The mapping is stricter than it sounds. Skin and occasion are inputs, not flavor text. The hero is one SKU the house already carries. The try-on still is staged media for the desk, not a live fitting room and not a checkout. The bag is a draft for human review: what would sit beside the hero if the stylist agrees. None of those steps is a charge. The sequence is skin and occasion, one hero, a try-on still, a bag, then a person at pay. If any step is missing, the desk does not invent a substitute from the open web. It waits, or it asks the stylist.",
    "The design choice that holds the seat together is the stop at pay. The agent proposes a hero, a still, and a bag. A named stylist still stands at the charge. Nothing posts to a card without that person. Human before pay is the product surface of this desk. The bag can be complete and still sit uncharged. The try-on can be staged and still wait. The hero can be named and still be swapped. The gate is the charge. Only a human crosses it. Propose, in this seat, means the next merchandising step. Approve means a named stylist accepts, edits, or rejects before anything is billed. Record means the consult and the ticket stay linked so the house can reopen the same conversation later.",
    "We refused two moves that would have made the seat look more capable and less hireable. The agent will not invent catalog SKUs. If the house does not carry the piece, the proposal ends. It will not charge without approval. A silent payment is a different job, and it is not this one. Those refusals are why a serious reader can finish the case and still know who is accountable. A more generous model that hallucinates a seasonal drop, or a quieter model that bills when the bag looks ready, would both fail the brief. Capability that crosses the gate is not a feature here. It is a defect.",
    "The record is the consult thread plus the ticket. Skin, occasion, fit, hold, and the drafted bag stay on one ticket so a later desk can reopen the same conversation. The ticket is not a dashboard and not a model trace. It is the paper the house already knows how to file. When the stylist approves, edits, or rejects, that decision sits with the thread. When they send the client home without a charge, the refusal sits there too. The next fitting does not start from rumor. A later aftercare note can find the same hero and the same hold instead of opening a new pile of scraps.",
    "This study is anonymized. We are not selling a shop SKU and we are not offering a concierge product for purchase. We are showing one seat: a demand desk with a human at pay, a bag that waits, and a record that can be reopened. The method is the written job, the gate the agent cannot cross, and the record the house can file. Another house will bring a different floor and a different named approver. The next brief will ask for a different job.",
  ],
  stills: [
    {
      id: "scatter",
      caption:
        "Pain still — skin, occasion, fit, and hold notes as scattered media, not a product chip wall.",
    },
    {
      id: "hero",
      caption:
        "Ability — occasion maps to one hero the house already carries. No invented SKUs.",
    },
    {
      id: "tryon",
      caption:
        "Ability — a staged try-on still for the stylist desk. Media, not a live fitting.",
    },
    {
      id: "bag",
      caption:
        "Gate — bag draft held before pay. Propose reaches the stylist; charge does not.",
    },
    {
      id: "ticket",
      caption:
        "Record — consult thread stays with the ticket so a later desk can reopen the same conversation.",
    },
  ],
} as const;

export const KNOWLEDGE = {
  display: "Knowledge desk",
  seat: "Controller / knowledge desk on a fixed corpus",
  constraint: "The same source hunt buries the team every close.",
  description:
    "A controller desk that answers from a fixed corpus, attaches citations, and drafts a Propose package. A human stands before any corpus change.",
  narrative: [
    "The knowledge desk is the controller seat that answers month-end questions from a fixed corpus. The person in the chair is a controller or a close lead who already knows the books and still cannot afford another hunt through the same sources. The buyer who hired the seat is usually a founder, ops lead, or general manager who watches the close stall on questions the house has already answered. The constraint is not a missing model. The constraint is the hunt. The general ledger extract, the trial balance, the close memo, and the prior cite are all in the house. Every close, the team walks the same path to find them again.",
    "We designed the job as a cite, not as an oracle. A platform assistant would answer from the open web and leave the controller to verify later. This seat is not allowed that luxury. The agent may answer from the corpus only. It may attach citations before the answer is shown. It may draft a Propose package — a written next step the controller can accept, edit, or reject — and stop there. Those three abilities are the whole permission. They do not map an occasion to a hero, sort overnight mail, or suggest a refund. They belong to knowledge, and only to knowledge.",
    "Corpus-only is stricter than a retrieval demo. If the source is not in the pack, the agent does not complete the sentence from memory. It says the cite is missing. Citations are not decorative footnotes. They are the condition of the answer. A month-end question that cannot show §12.4, or whichever section the house actually filed, is not an answer on this desk. The Propose package is not an Execute package. It names the ask, the cite, and the recommended disposition. It never writes the ledger. It never edits the corpus. Propose, in this seat, means a close pack the controller can reopen. Execute is a different verb, and it is refused.",
    "The design choice that holds the seat together is the stop before a corpus change. The agent proposes. A named controller still decides whether the books or the corpus move. Human before execute corpus change is the product surface of this desk. Approve and Reject sit with that named person. Books stay held until they act. A clean cite does not move a number. A confident package does not post a journal. The gate is the write. Only a human crosses it. Record means the ask, the citation, and the decision sit in one audit log so a later close can see what was asked, what was cited, and what the controller did.",
    "We refused two moves that would have made the seat look more capable and less hireable. The agent will not answer outside the corpus. A fluent paragraph without a house source is a defect, not a feature. It will not Execute ledger changes or corpus writes. A silent book move is a different job, and it is not this one. Those refusals are why a serious reader can finish the case and still know who is accountable. A more generous model that completes from training data, or a quieter model that posts when the cite looks complete, would both fail the brief.",
    "The record is one audit log. Ask, citation, and decision stay linked. The log is not a chat history and not a model scoreboard. It is the register the close already knows how to reopen. When the controller approves, the approval sits with the cite. When they reject, the rejection sits there too. A later question about the same section does not start a new hunt through slips. It opens the same row. The house can see that the agent proposed and that a person decided.",
    "This study is anonymized. We are not selling a clerk SKU and we are not offering a ledger product for purchase. We are showing one seat: a knowledge desk with a human before any corpus change, a Propose package that never Executes, and an audit log that can be reopened. The method is the written job, the gate the agent cannot cross, and the record the close can file. Another house will bring a different corpus and a different named controller. The next brief will ask for a different job.",
  ],
  stills: [
    {
      id: "sources",
      caption:
        "Pain still — the same source hunt as hanging slips. Close after close, the path does not change.",
    },
    {
      id: "corpus",
      caption:
        "Ability — answer from the corpus only. A missing cite ends the sentence.",
    },
    {
      id: "propose",
      caption:
        "Ability — a Propose package. Never Execute. The write is not in the permission.",
    },
    {
      id: "gate",
      caption:
        "Gate — Approve or Reject by a named controller before books or corpus move.",
    },
    {
      id: "audit",
      caption:
        "Record — ask, citation, and decision in one audit log the close can reopen.",
    },
  ],
} as const;

export const ATTENTION = {
  display: "Attention desk",
  seat: "Operator desk turning overnight threads into one morning packet",
  constraint: "Overnight mail arrives without a single readable brief.",
  description:
    "An operator desk that sorts Priority / Watch / Noise, drafts in two tones, and escalates. A human stands before send.",
  narrative: [
    "The attention desk is the operator seat that turns overnight threads into one morning packet. The person in the chair is a desk lead who already knows which senders matter and still cannot start the day from a pile. The buyer who hired the seat is usually a founder or ops lead who watches the morning open on unread mail instead of on a brief. The constraint is not volume as a boast. The constraint is the missing packet. Overnight threads arrive. They are not ranked. They are not drafted. They are not marked for a human. The operator rebuilds a morning from scratch.",
    "We designed the job as a packet, not as a publisher. A platform assistant would summarize everything and post a digest. This seat is not allowed that luxury. The agent may sort threads into Priority, Watch, and Noise. It may draft in two tones so the operator can choose a voice instead of inventing one under time. It may escalate the threads that need a human before anything goes out. Those three abilities are the whole permission. They do not name a hero SKU, cite a close pack, or hold a refund. They belong to attention, and only to attention.",
    "The lanes are the grammar of the seat. Priority is the work that needs an operator this morning. Watch is the work that must stay visible without stealing the first hour. Noise is the work that can be archived without a draft. The agent does not collapse those three into a single score. A thread that is merely loud is not Priority. A thread that is merely quiet is not safe to ignore. Two tones sit beside the lanes: one firmer, one cooler. Neither tone is a send. They are drafts for a person who still owns the voice of the house. Escalate is a third act, not a fourth lane. It marks the thread that the agent must not finish.",
    "The design choice that holds the seat together is the stop before send. The agent proposes a packet: lanes, drafts, and an escalate flag. A named operator still edits before anything goes out. Human before send is the product surface of this desk. Never auto-publish is the same gate said as a refusal. A clean Priority lane does not post. A polished Tone A does not leave the building. A Watch thread does not become a public digest because the model felt complete. The gate is the send. Only a human crosses it. Propose, in this seat, means the morning packet. Approve means the operator accepts, edits, or rejects before a message ships. Record means the brief, the draft, and the escalate decision stay linked.",
    "We refused the move that would have made the seat look finished on arrival. The agent will not auto-publish digests or posts. A silent publish is a different job, and it is not this one. That refusal is why a serious reader can finish the case and still know who owns the house voice. A more generous model that ships the digest at dawn, or a quieter model that posts when both tones look ready, would both fail the brief. Speed that crosses the gate is not a feature here.",
    "The record is the morning packet. Brief, draft, and escalate decision stay on one strip so a later desk can see what the overnight looked like, what was drafted, and whether a human was called. The packet is not a newsletter and not a social queue. It is the paper the operator already knows how to open at the start of the day. When the operator sends, the send sits with the brief. When they hold, the hold sits there too. The next morning does not start from a new unlabeled pile if the same thread is still live.",
    "This study is anonymized. We are not selling a morning SKU and we are not offering an inbox product for purchase. We are showing one seat: an attention desk with Priority, Watch, and Noise, two draft tones, a human before send, and a packet that can be reopened. The method is the written job, the gate the agent cannot cross, and the record the operator can file. Another house will bring a different overnight and a different named operator. The next brief will ask for a different job.",
  ],
  stills: [
    {
      id: "mail",
      caption:
        "Pain still — overnight threads stacked without a readable brief.",
    },
    {
      id: "lanes",
      caption:
        "Ability — Priority / Watch / Noise as separate lanes. Loud is not the same as first.",
    },
    {
      id: "tones",
      caption:
        "Ability — two draft tones for the operator to choose. Neither tone is a send.",
    },
    {
      id: "hold",
      caption:
        "Gate — escalate and send held. A human edits before anything goes out.",
    },
    {
      id: "packet",
      caption:
        "Record — brief, draft, and escalate decision linked in one morning packet.",
    },
  ],
} as const;

export const EXCEPTION = {
  display: "Exception desk",
  seat: "Ops / CX lead clearing exception queues",
  constraint: "Exceptions pile faster than policy can be reread.",
  description:
    "An ops desk that ranks the exception queue, suggests a policy disposition, and drafts the case note. A human stands before money moves.",
  narrative: [
    "The exception desk is the operations seat that clears a queue against written policy. The person in the chair is an ops or CX lead who already knows the refund window and still cannot reread the book for every ticket. The buyer who hired the seat is usually a founder or general manager who watches exceptions pile while the same policy sits unused beside the queue. The constraint is not a missing rule. The constraint is time against the pile. Tickets arrive faster than a person can open §4.2, or whichever section the house actually filed, and still write a case note that another lead can defend.",
    "We designed the job as a ranked case, not as a payout engine. A platform assistant would settle the ticket. This seat is not allowed that luxury. The agent may rank the queue by urgency and policy fit. It may suggest a policy disposition with the cite attached. It may draft the case note for the lead. Those three abilities are the whole permission. They do not name a hero garment, answer a close question from a corpus, or publish a morning digest. They belong to exceptions, and only to exceptions.",
    "Rank is the first act because the pile lies. The loudest ticket is not always the one that must move first. A restock inside the window and a refund that would leave the house are not the same row. The agent may order the queue. It may not empty it. Disposition is a suggestion with a cite, not a payment. The note is a draft the lead can stand behind, not a message to the customer and not a credit to a card. U1, U2, and U3 are urgency marks on the study queue. They are not a license to move money. If the policy cite is missing, the suggestion ends. The desk does not invent a softer rule to clear the board.",
    "The design choice that holds the seat together is the stop before money. The agent proposes a rank, a disposition, and a note. A named lead still handles refunds and irreversible money moves. Human before money moves is the product surface of this desk. A ranked EX-441 does not pay. A clean §4.2 cite does not refund. A finished case note does not credit an account. The gate is the money. Only a human crosses it. Propose, in this seat, means the next case action. Approve means the lead accepts, edits, or rejects before anything is paid. Record means the policy cite and the decision sit on one case timeline.",
    "We refused the move that would have made the seat look finished at the bottom of the queue. The agent will not issue refunds or move money without a human. A silent payout is a different job, and it is not this one. That refusal is why a serious reader can finish the case and still know who holds the cash. A more generous model that refunds when the cite matches, or a quieter model that pays when the note looks complete, would both fail the brief. Clearance that crosses the gate is not a feature here.",
    "The record is the case timeline. Policy cite and decision stay on one spine so a later lead can see what was suggested, what was held, and what a person decided. The timeline is not a chat and not a settlement report. It is the file the queue already knows how to reopen. When the lead refunds, the refund sits with the cite. When they hold, the hold sits there too. The next similar ticket does not start from a blank note if the same section still governs the house.",
    "This study is anonymized. We are not selling a copilot SKU and we are not offering an exceptions product for purchase. We are showing one seat: an exception desk with a ranked queue, a policy suggestion, a drafted case note, a human before money moves, and a timeline that can be reopened. The method is the written job, the gate the agent cannot cross, and the record the lead can file. Another house will bring a different queue and a different named approver. The next brief will ask for a different job.",
  ],
  stills: [
    {
      id: "pile",
      caption:
        "Pain still — exception tickets piled faster than policy can be reread.",
    },
    {
      id: "queue",
      caption:
        "Ability — rank the queue by urgency and policy fit. Rank is not a payout.",
    },
    {
      id: "policy",
      caption:
        "Ability — suggest a policy disposition with the cite attached. Missing cite ends the suggestion.",
    },
    {
      id: "note",
      caption:
        "Gate — case note drafted; refund and money held for a named lead.",
    },
    {
      id: "timeline",
      caption:
        "Record — case timeline keeps policy cite and decision on one spine.",
    },
  ],
} as const;
