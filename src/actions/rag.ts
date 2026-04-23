export type ConversationState = {
  lastPolicyQuestion: string;
  pendingClarification: {
    type: "department";
    options: string[];
  } | null;
};

export type AskPolicyRequest = {
  question: string;
  policy_type?: string | null;
  department?: string | null;
  conversationState?: ConversationState | null;
};

export type AskPolicyResponse = {
  mode?: "policy_redirect" | "policy_specific";
  answer: string;
  confidence?: "low" | "medium" | "high";
  escalationNeeded?: boolean;
  needsClarification?: boolean;
  clarificationType?: string | null;
  clarificationOptions?: string[];
  citations?: Array<{
    title?: string;
    documentTitle?: string;
    sectionTitle?: string;
    sourceUrl?: string;
    policyType?: string | null;
    department?: string | null;
  }>;
  retrievedChunks?: unknown[];
  retrievalMethod?: string;
  error?: string;
};

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL?.replace(/\/$/, "");

export async function askPolicyQuestion(
  payload: AskPolicyRequest
): Promise<AskPolicyResponse> {
  const response = await fetch(`${BACKEND_URL}/api/rag/v1/ask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Failed to fetch policy response.");
  }

  return data;
}
