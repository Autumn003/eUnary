import { IOSNotificationsStack } from '@/components/ui/ios-notifications-stack';

const notifications = [
    {
        id: 1,
        title: '🎧 New Music Drop',
        description:
            'Your favorite artist just released a new track. Listen now!',
    },
    {
        id: 2,
        title: '🎉 You’ve Hit a Streak!',
        description:
            'You’ve completed your tasks 5 days in a row. Keep it going!',
    },
    {
        id: 3,
        title: '🔥 Trending Now',
        description:
            'A post you liked is going viral! See what people are saying.',
    },
    {
        id: 4,
        title: '🕹️ Game Night Invite',
        description:
            'Your friends are online and ready to play. Join the party now!',
    },
    {
        id: 5,
        title: '📸 New Tagged Photo',
        description:
            'You’ve been tagged in a photo by Sarah. Tap to check it out!',
    },
    {
        id: 6,
        title: '🚀 Boost Your Profile',
        description:
            'You’re just 2 steps away from completing your profile. Let’s finish it!',
    },
    {
        id: 7,
        title: '📦 Package Delivered',
        description:
            'Your order from Nike was delivered. Tap to view the delivery photo.',
    },
    {
        id: 8,
        title: '💬 3 New Comments',
        description:
            'People are loving your recent post. See what they’re saying!',
    },
];

const IOSNotificationsStackDemo = () => {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center">
            <IOSNotificationsStack
                notifications={notifications}
                className="from bg-gradient-to-br from-sky-300/60 via-cyan-200/50 to-indigo-200 px-8 py-6 dark:from-blue-950/10 dark:via-fuchsia-950/30 dark:to-slate-950"
            />
        </div>
    );
};

export default IOSNotificationsStackDemo;
