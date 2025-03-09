'use client';

import ExpandableCard from '@/components/ui/expandable-card';

const ExpandableCardDemo = () => {
    return (
        <div>
            <ExpandableCard
                title="Nike Air 3"
                subtitle="$249"
                description='Jordan Air Jordan 1 High OG "Shadow 2.0" Sneakers - Grey'
                backgroundImage="/media/shoes.jpg"
                contextImage="/media/shoe.jpg"
            />
        </div>
    );
};

export default ExpandableCardDemo;
