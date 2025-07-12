'use client';  // Add this line to make it a Client Component

import { useState } from 'react';
import PlantResult from './PlantResult';

export default function PlantUploader() {
    const [image, setImage] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const base64Image = reader.result as string;
                setImage(base64Image);
                setLoading(true);

                try {
                    const response = await fetch('/api/identify', {
                        method: 'POST',
                        body: JSON.stringify({ image: base64Image }),
                    });
                    const data = await response.json();
                    setResult(data.result);
                } catch (error) {
                    console.error('Identification error:', error);
                    setResult('Failed to identify the plant');
                } finally {
                    setLoading(false);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col items-center mt-10 px-4">
            
            

            {!image && (
                <label className="border-2 border-dashed border-green-500 rounded-lg p-8 w-80 text-center hover:bg-green-50 transition cursor-pointer">
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                    <p className="text-green-700 font-medium text-lg">Click to Upload Plant Image</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                </label>
            )}

            {loading && (
                <div className="mt-6 flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-green-400 border-t-transparent"></div>
                </div>
            )}

            {image && result && <PlantResult image={image} result={result} />}
        </div>
    );
}
