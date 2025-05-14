
export const metadata = {
    title: "Privacy Policy | PastePlay",
    description: "Learn how PastePlay collects, uses, and protects your information. Read our Privacy Policy to understand your data rights and our practices.",
    keywords: [
        "PastePlay privacy",
        "data policy",
        "user information security",
        "privacy policy for PastePlay",
        "YouTube API privacy"
    ],
    openGraph: {
        title: "Privacy Policy | PastePlay",
        description: "Understand how PastePlay handles your data and ensures user privacy.",
        url: "https://playpaste.virenderchauhan.in",
        siteName: "PastePlay",
        images: [
            {
                url: "https://playpaste.virenderchauhan.in/og-image.png",
                width: 1200,
                height: 630,
                alt: "PastePlay Privacy Policy",
            },
        ],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | PastePlay",
        description: "Read how we protect your data and privacy at PastePlay.",
        images: ["https://your-domain.com/og-image.png"],
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="text-sm text-gray-500 mb-4">Effective Date: May 13, 2025</p>

            <section className="space-y-6 text-base leading-relaxed">
                <p>
                    This Privacy Policy describes how <strong>Playpaste</strong> ("we", "our", or "us") collects,
                    uses, and protects your information when you use our YouTube Playlist Generator app.
                </p>

                <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                <p>
                    When you sign in using your Google account, we request access to limited information through the
                    YouTube Data API:
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li>Your YouTube account identifier</li>
                    <li>Permission to create and manage playlists on your behalf</li>
                </ul>
                <p>We do not access your personal videos, subscriptions, or any private content.</p>

                <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
                <p>
                    We only use your data to authenticate you with Google and create YouTube playlists based on the
                    input you provide. We do not use your data for analytics, marketing, or sharing.
                </p>

                <h2 className="text-xl font-semibold">3. Data Storage</h2>
                <p>
                    We do not store your Google access tokens or YouTube data permanently. All data is handled in
                    memory during your session and cleared after your interaction ends.
                </p>

                <h2 className="text-xl font-semibold">4. Data Sharing</h2>
                <p>We do not share, rent, or sell your data with any third parties.</p>

                <h2 className="text-xl font-semibold">5. Security</h2>
                <p>
                    We implement industry-standard security practices such as OAuth 2.0 and HTTPS encryption to
                    protect your data.
                </p>

                <h2 className="text-xl font-semibold">6. Your Consent</h2>
                <p>
                    By using our application and logging in with your Google account, you consent to the collection
                    and use of your information as described in this policy.
                </p>

                <h2 className="text-xl font-semibold">7. Revoking Access</h2>
                <p>
                    You can revoke our access to your Google account at any time by visiting:
                    <br />
                    <a
                        href="https://myaccount.google.com/permissions"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://myaccount.google.com/permissions
                    </a>
                </p>

                <h2 className="text-xl font-semibold">8. Contact Us</h2>
                <p>
                    For any questions or concerns about this Privacy Policy, please contact us at:
                    <br />
                    <a
                        href="mailto:youremail@example.com"
                        className="text-blue-600 underline"
                    >
                        youremail@example.com
                    </a>
                </p>

                <div className="mt-8 border-t pt-4 text-sm text-gray-600">
                    <p>
                        This app uses the YouTube API Services. By using this app, you also agree to the:
                    </p>
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            <a
                                href="https://www.youtube.com/t/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                YouTube Terms of Service
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Google Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
