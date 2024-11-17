import React, { useState, useEffect } from 'react';
import { ChefHat, Clock, Users, Utensils } from 'lucide-react';
import recipeData from "../pages/resep/db/resep";

const RecipeInfoCard = ({ icon: Icon, label, value }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md">
        <Icon className="w-6 h-6 mb-2 text-primary" />
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-base font-semibold">{value}</span>
    </div>
);

const DecorativeLine = () => (
    <svg className="w-full h-4 my-8" viewBox="0 0 100 4">
        <path
            d="M 0,2 L 100,2"
            stroke="#E2E8F0"
            strokeWidth="0.5"
            strokeDasharray="1 3"
        />
        <circle cx="50" cy="2" r="1.5" fill="#3B82F6" />
    </svg>
);

const RecipePage = ({ recipeId }) => {
    const [isVisible, setIsVisible] = useState(false);
    const recipe = recipeData[recipeId];

    if (!recipe) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-semibold text-gray-600">Resep tidak ditemukan</p>
            </div>
        );
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="max-w-[1030px] mx-auto px-4 sm:px-8 xl:px-0">
            {/* Header Section */}
            <div className={`max-w-[770px] mx-auto text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <a
                    href="/resep-makanan"
                    className="inline-flex text-blue bg-blue/[0.08] font-medium text-custom-sm py-1 px-3 rounded-full mb-1 hover:bg-blue/[0.15] transition-colors"
                >
                    Resep
                </a>
                <h1 className="mb-8 text-2xl font-bold sm:text-4xl lg:text-custom-2 text-dark">
                    {recipe.title}
                </h1>

                {/* Recipe Info Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8 sm:grid-cols-4">
                    <RecipeInfoCard icon={Clock} label="Waktu" value={recipe.cookTime} />
                    <RecipeInfoCard icon={Users} label="Porsi" value={recipe.servings} />
                    <RecipeInfoCard icon={ChefHat} label="Tingkat" value={recipe.difficulty} />
                    <RecipeInfoCard icon={Utensils} label="Kategori" value="Lauk" />
                </div>
            </div>

            <DecorativeLine />

            {/* Content Section */}
            <div className={`max-w-[770px] mx-auto bg-white rounded-xl p-6 shadow-sm transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div>
                    {/* Ingredients Section */}
                    <div className={`transition-all duration-700 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                        <h2 className="mb-5 text-2xl font-semibold text-primary">Bahan</h2>
                        <ol className="list-decimal ms-5 space-y-2">
                            {recipe.ingredients.map((ingredient, index) => (
                                typeof ingredient === 'string' ? (
                                    <li key={index} className="text-gray-700 hover:text-gray-900 transition-colors">
                                        {ingredient}
                                    </li>
                                ) : (
                                    <React.Fragment key={index}>
                                        <li className="font-medium text-gray-800">{ingredient.title}</li>
                                        <ul className="list-disc ms-5 space-y-1">
                                            {ingredient.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="text-gray-700 hover:text-gray-900 transition-colors">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </React.Fragment>
                                )
                            ))}
                        </ol>
                    </div>

                    <DecorativeLine />

                    {/* Steps Section */}
                    <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                        <h2 className="my-5 text-2xl font-semibold text-primary">Cara pembuatan</h2>
                        <ol className="list-decimal ms-5 space-y-4">
                            {recipe.steps.map((step, index) => (
                                <li
                                    key={index}
                                    className={`mb-2 text-gray-700 hover:text-gray-900 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                                    style={{ transitionDelay: `${500 + (index * 100)}ms` }}
                                >
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipePage;