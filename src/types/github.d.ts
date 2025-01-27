export interface GithubLanguage {
  language: string;
  hexCode: string;
  percentage: number;
}

export type GithubLanguageResponse = Array<GithubLanguage>
