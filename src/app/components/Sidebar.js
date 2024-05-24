import { useState } from 'react';

const Sidebar = () => {
    const [selectedOption, setSelectedOption] = useState('Upcoming Trips');

    const options = [
        'Upcoming Trips',
        'Best Sellers',
        'Biking Trips',
        'Backpacking Trips',
        'New Launches',
        'Himalayan Treks',
        'Weekend Getaways',
        'International Community Trips',
        'All Girls Trips'
    ];

    return (
        <div className="w-full md:w-1/4 lg:w-1/5 p-4">
            <h2 className="text-xl font-bold mb-4">Select from our tours</h2>
            <div>
                {options.map(option => (
                    <div key={option} className="flex items-center text-gray-500 justify-between mb-2">
                        <label className={`flex items-center ${selectedOption === option ? 'font-semibold text-gray-800' : ''}`}>
                            <input
                                type="checkbox"
                                className={`mx-2 mr-4 h-6 w-6 rounded-xl text-sm `}
                                checked={selectedOption === option}
                                onChange={() => setSelectedOption(selectedOption === option ? '' : option)}
                            />
                            {option}
                        </label>
                        {selectedOption === option && (
                            <button className="text-blue-500 text-sm ml-2">
                                View All &rarr;
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
