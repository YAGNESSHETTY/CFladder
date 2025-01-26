import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const Ladder = () => {
    const { handel } = useParams();
    const [userRating, setUserRating] = useState(null);
    const [suggestedLadderId, setSuggestedLadderId] = useState(null);

    // Ladders array
    const ladders = [
        { id: 0, title: "Beginner's Ladder", description: "If you are a Beginner, then you must solve this first" },
        ...Array.from({ length: 12 }, (_, i) => {
            const start = 1200 + i * 100;
            const end = start + 100;
            return {
                id: i + 1,
                title: `${start}-${end} Ladder`,
                description: `This is a ladder for problems rated between ${start} and ${end}`,
            };
        }),
    ];

    useEffect(() => {
        const fetchUserRating = async () => {
            try {
                const response = await fetch(`https://codeforces.com/api/user.info?handles=${handel}`);
                const data = await response.json();
                if (data.status === "OK") {
                    const rating = data.result[0].rating || 0; 
                    setUserRating(rating);

                    const suggestedId = Math.min(
                        Math.floor((rating - 1200) / 100) + 2,
                        ladders.length - 1                   
                    );
                    setSuggestedLadderId(suggestedId);
                }
            } catch (error) {
                console.error("Failed to fetch user rating:", error);
            }
        };

        fetchUserRating();
    }, [handel , ladders.length]);

    return (
        <section>
            <div className="background pb-4 mb-5">
                <div className="itemladder">
                    <div className="container">
                        <div className="text-secondary">
                            <h2 className="pt-5 pb-2">Hey {handel}</h2>
                            {userRating !== null ? (
                                <p className="fs-3">
                                    Your current rating: <strong>{userRating}</strong>
                                </p>
                            ) : (
                                <p className="fs-3">Fetching your rating...</p>
                            )}
                            <p className="fs-3">Try some Ladders</p>
                        </div>

                        {ladders.map((ladder) => (
                            <div key={ladder.id} className="iteml">
                                <div>
                                    <Link
                                        to={`/${handel}/${ladder.id}`}
                                        className={`btn fs-2 ${
                                            suggestedLadderId === ladder.id ? "btn-primary" : "btn-dark"
                                        }`}
                                    >
                                        {ladder.title}
                                    </Link>
                                    <p>{ladder.description}</p>
                                    {suggestedLadderId === ladder.id && (
                                        <p className="text-success fw-bold">
                                            Recommended ladder based on your rating!
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ladder;
