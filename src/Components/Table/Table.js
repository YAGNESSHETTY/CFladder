import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import PrintTable from "./PrintTable";

const PROBLEMS_API_URL = "https://codeforces.com/api/problemset.problems";

const Table = () => {
    const { handel, ladder } = useParams(); 
    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userProblems, setUserProblems] = useState([]);
    const [ctr, setCtr] = useState(0);

    const ladders = [
        { start: 0, end: 1200 },
        { start: 1200, end: 1300 },
        { start: 1300, end: 1400 },
        { start: 1400, end: 1500 },
        { start: 1500, end: 1600 },
        { start: 1600, end: 1700 },
        { start: 1700, end: 1800 },
        { start: 1800, end: 1900 },
        { start: 1900, end: 2000 },
        { start: 2000, end: 2100 },
        { start: 2100, end: 2200 },
        { start: 2200, end: 2300 },
        { start: 2300, end: 2400 },
        { start: 2400, end: 2500 },
    ];

    const ladderRange = ladders[ladder] || { start: 1200, end: 1300 }; 
    console.log(ladder) ;
    useEffect(() => {
        const fetchProblems = async () => {
            try {
                const response = await fetch(PROBLEMS_API_URL);
                const data = await response.json();
                if (data.status === "OK") {
                    const problemList = data.result.problems
                        .filter(
                            (problem) =>
                                problem.rating >= ladderRange.start && problem.rating < ladderRange.end
                        )
                        .map((problem) => ({
                            ...problem,
                            submissions: problem.solvedCount || 0, 
                        }));

                    const sortedProblems = problemList.sort((a, b) => b.submissions - a.submissions);
                    const limitedProblems = sortedProblems.slice(0, 200);

                    setProblems(limitedProblems);
                }
            } catch (error) {
                console.error("Error fetching problems:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProblems();
    }, [ladder, ladderRange.start, ladderRange.end]); 
    useEffect(() => {
        const fetchUserProblems = async () => {
            const userurl = `https://codeforces.com/api/user.status?handle=${handel}`;
            try {
                const response = await fetch(userurl);
                const data = await response.json();
                if (data.status === "OK") {
                    const solvedProblems = data.result.map((item) => ({
                        contestId: item.problem.contestId,
                        index: item.problem.index,
                    }));
                    setUserProblems(solvedProblems);
                }
            } catch (error) {
                console.error("Error fetching user status:", error);
            }
        };

        if (handel) {
            fetchUserProblems();
        }
    }, [handel]); 

    useEffect(() => {
        if (problems.length > 0 && userProblems.length > 0) {
            const markedProblems = problems.map((problem) => {
                const isSolved = userProblems.some(
                    (userProblem) =>
                        userProblem.index === problem.index &&
                        userProblem.contestId === problem.contestId
                );
                return { ...problem, solved: isSolved };
            });

            if (!problems.every((p, index) => p.solved === markedProblems[index]?.solved)) {
                setProblems(markedProblems);
            }

            setCtr(markedProblems.filter((problem) => problem.solved).length);
        }
    }, [problems, userProblems]); 

    return (
        <div className="container tablemain">
            {loading ? (
                <h1 className="text-center text-primary">Loading...</h1>
            ) : (
                <>
                    <div className="container item">
                        <h2>
                            Welcome: {handel}
                            <p className="pt-5 fw-bold text-dark fs-4">
                                Solved: {ctr} / {problems.length}
                            </p>
                        </h2>
                    </div>

                    <div className="container">
                        <PrintTable array={problems} key={problems.length} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Table;
