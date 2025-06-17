import { useState } from "react";
import frameworkData from "./products.json";

export default function LatihanProducts() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.title.toLowerCase().includes(_searchTerm) ||
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
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Tag Filter Dropdown */}
            <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSelectedTag(e.target.value)}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {/* Framework List */}
                {filteredFrameworks.map((item,index) => (
                    <div
                        key={item.id}
                        className="border p-4 mb-4 rounded-lg shadow-md bg-white"
                    >
                        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
                        <p className="text-gray-600 mb-2"><b>Description :</b>{item.description}</p>
                        <p className="text-gray-600 mb-2"><b>Category :</b>{item.category}</p>
                        <p className="text-gray-600 mb-2"><b>Price :</b>{item.price}</p>
                        <p className="text-gray-600"><b>Discount : </b>{item.discountPercentage}%</p>
                        <p className="text-gray-600"><b>Rating  : </b>{item.rating}</p>
                        <p className="text-gray-600"><b>Stock : </b>{item.stock}</p>
                        <p className="text-gray-600"><b>Brand : </b>{item.brand}</p>
                        <p className="text-gray-600"><b>Width : </b>{item.dimensions.width},
                            <b>Height : </b>{item.dimensions.height},
                            <b>Depth : </b>{item.dimensions.depth} </p>

                        {item.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}