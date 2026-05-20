import React from 'react';

const loadingPage = () => {
    return (
        <div>
            <div className="flex min-h-screen flex-col items-center justify-center bg-base-200">
                <span className="loading loading-spinner loading-lg text-primary"></span>

                <h2 className="mt-4 text-xl font-semibold text-base-content">
                    Loading...
                </h2>

                <p className="mt-2 text-sm text-base-content/70">
                    Please wait while we prepare your content
                </p>
            </div>
        </div>
    );
};

export default loadingPage;