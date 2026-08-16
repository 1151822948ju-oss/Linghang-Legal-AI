/** Sanitized competition-facing shape; implementation details remain private. */
export interface EvidenceReturnTarget {
  matterId: string;
  sourceId: string;
  passageId?: string;
  locator?: string;
  verificationStatus: string;
  relationship?: "supports" | "limits" | "contradicts" | "unresolved";
  returnAvailability: "available" | "unavailable";
  returnType: "document_preview" | "web_proxy" | "official_url" | "provider_snapshot" | "unavailable";
  canonicalOriginalUrl?: string;
  safePreviewReference?: string;
  limitations?: string[];
}
