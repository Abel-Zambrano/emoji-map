import React from 'react';
import Entry from './components/Entry';

function createEntry(emoji) {
    return <Entry 
        key={emoji.id}
        id={emoji.id}
        emoji={emoji.emoji}
        name={emoji.name}
        meaning={emoji.meaning}
    />
};

export default createEntry;