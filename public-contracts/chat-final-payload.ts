/**
 * Sanitized public showcase contract.
 * The production implementation contains additional internal validation and diagnostics.
 */
export type RelianceStatus = "candidate" | "qualified" | "reliance_ready";

export interface PublicCitationTarget {
  claimIds?: string[];
  sourceId: string;
  passageId?: string;
  locator?: string;
  verificationStatus: string;
  returnType: "document_preview" | "web_proxy" | "official_url" | "provider_snapshot" | "unavailable";
  returnAvailability: "available" | "unavailable";
}

export interface PublicArtifactSummary {
  artifactId: string;
  familyId?: string;
  revision?: number;
  name: string;
  kind: string;
  mimeType?: string;
  relianceStatus?: RelianceStatus;
  limitations?: string[];
}

export interface ChatFinalPayloadV1 {
  version: "1";
  reply: string;
  sessionId: string;
  matterId?: string;
  executionId?: string;
  continuationAvailable: boolean;
  responseConditional?: boolean;
  responseRelianceStatus?: RelianceStatus;
  responseLimitations?: string[];
  responseCitations: PublicCitationTarget[];
  artifacts: PublicArtifactSummary[];
  relatedAssets?: {
    status: string;
    items: Array<{
      candidateId: string;
      assetType: string;
      title?: string;
      sourceId?: string;
      evidenceStatus: "not_evidence";
    }>;
  };
}
