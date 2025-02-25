export type UserActivity = {
    id?: string;
    /**
     * The activity title should be clear and concise. This text describes the content of the link, like “Photo taken on July 27, 2020” or “Conversation with Maria”. Use nouns for activity titles.
     */
    title?: string;
    description?: string;
    webpageURL?: string;
    keywords?: string[];
    activityType: string;
    phrase?: string;
    thumbnailURL?: string;
    userInfo?: Record<string, string>;
    isEligibleForHandoff?: boolean;
    isEligibleForPrediction?: boolean;
    isEligibleForSearch?: boolean;
    /** Local file path for an image */
    imageUrl?: string;
    darkImageUrl?: string;
    dateModified?: Date;
    expirationDate?: Date;
};
export declare const ExpoHead: {
    activities: {
        INDEXED_ROUTE: string;
    };
    getLaunchActivity(): UserActivity;
    createActivity(userActivity: UserActivity): void;
    clearActivitiesAsync(ids: string[]): Promise<void>;
    suspendActivity(id: string): void;
    revokeActivity(id: string): void;
} | null;
//# sourceMappingURL=ExpoHeadModule.d.ts.map