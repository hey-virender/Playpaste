import React from 'react';

export const metadata = {
    title: "Terms & Conditions | PastePlay",
    description: "Read the Terms & Conditions for using PastePlay, your smart YouTube playlist generator.",
};

export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>

            <p className="mb-4">
                Welcome to PastePlay, accessible at <strong>playpaste.virenderchauhan.in</strong>. By using our platform, you agree to comply with and be bound by the following terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Service</h2>
            <p className="mb-4">
                PastePlay allows users to generate YouTube playlists by pasting song titles. You must not misuse the service or access it using unauthorized methods.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Accounts</h2>
            <p className="mb-4">
                If you sign in using Google, you are responsible for maintaining the confidentiality of your session and any actions taken under it.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
                All trademarks, logos, and brand names are the property of their respective owners. PastePlay does not host or stream music. It only creates playlists via the YouTube Data API.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Limitations</h2>
            <p className="mb-4">
                We do not guarantee the accuracy or availability of playlists generated. You agree not to hold us liable for any direct or indirect damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modifications</h2>
            <p className="mb-4">
                We reserve the right to change these terms at any time. Continued use after updates means you accept the modified terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
            <p className="mb-4">
                If you have any questions about these Terms, please contact us at <a href="mailto:bikuchauhan786@gmail.com" className="text-blue-600 underline">bikuchauhan786@gmail.com</a>.
            </p>
        </main>
    );
}
