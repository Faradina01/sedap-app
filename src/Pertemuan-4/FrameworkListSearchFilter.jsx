import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
    const _selectedTag = selectedTag.toLowerCase();

    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name.toLowerCase().includes(_searchTerm) ||
            framework.description.toLowerCase().includes(_searchTerm);

        const matchesTag = selectedTag
            ? framework.tags.includes(selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="p-8">
            {/* Search Input */}
            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Tag Filter Dropdown */}
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>

            {/* Framework List */}
            {filteredFrameworks.map((item) => (
                <div
                    key={item.id}
                    className="border p-4 mb-4 rounded-lg shadow-md bg-white"
                >
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600 mb-2">{item.description}</p>

                    {/* Links */}
                    <div className="mb-2 space-x-4">
                        <a
                            href={item.details.officialWebsite}
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Official Website
                        </a>
                        <a href="#" className="text-blue-600 underline">
                            {item.details.developer}
                        </a>
                    </div>

                    {/* Tags */}
                    <div className="mt-2">
                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}