
import React, { useState } from 'react';
import Card from '../ui/Card';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

const FeedbackPage: React.FC = () => {
    const [feedbackType, setFeedbackType] = useState('developer');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() === '') return;
        // In a real app, this would send the data to a server
        console.log(`Feedback for ${feedbackType}: ${message}`);
        setIsSubmitted(true);
        setMessage('');
    };

    return (
        <div className="p-2">
            <h2 className="text-2xl font-bold text-slate-900 px-4 pt-4">Submit Feedback</h2>

            {isSubmitted ? (
                <Card title="Thank You!" icon={ChatBubbleBottomCenterTextIcon}>
                    <p>Your feedback has been successfully submitted. We appreciate your input!</p>
                    <button 
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors"
                    >
                        Submit Another
                    </button>
                </Card>
            ) : (
                <Card title="We value your opinion" icon={ChatBubbleBottomCenterTextIcon}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="feedback-to" className="block text-sm font-medium text-slate-700 mb-2">
                                Send feedback to:
                            </label>
                            <select
                                id="feedback-to"
                                value={feedbackType}
                                onChange={(e) => setFeedbackType(e.target.value)}
                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                            >
                                <option value="developer">App Developers</option>
                                <option value="authority">Issuing Authority</option>
                            </select>
                        </div>
                        <div className="mb-4">
                             <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                Your message:
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Please describe the issue or your suggestion..."
                                className="w-full p-2 border border-slate-300 rounded-md focus:ring-sky-500 focus:border-sky-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700 transition-colors disabled:bg-slate-400"
                            disabled={!message.trim()}
                        >
                            Submit Feedback
                        </button>
                    </form>
                </Card>
            )}
        </div>
    );
};

export default FeedbackPage;
