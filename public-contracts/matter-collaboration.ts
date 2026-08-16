/** Public conceptual contract; private authorization code is intentionally omitted. */
export type MatterRolePreset = "trainee" | "supervisor" | "client_reviewer";

export type MatterCapability =
  | "view"
  | "comment"
  | "propose_edit"
  | "edit"
  | "review_revision"
  | "approval";

export interface MatterCollaborationGrant {
  matterId: string;
  subjectId: string;
  preset?: MatterRolePreset;
  documentIds?: string[];
  capabilities: MatterCapability[];
  sanitizedOnly?: boolean;
}
