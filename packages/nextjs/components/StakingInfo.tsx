"use client";

import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { Balance } from "./scaffold-eth";

export const StakingInfo = () => {

    const { data: rewardRatePerSecond, isLoading: isRewardRatePerSecondLoading } = useScaffoldReadContract({
        contractName: "Staker",
        functionName: "rewardRatePerSecond",
    });

    const { data: withdrawalDeadline, isLoading: isWithdrawalDeadlineLoading } = useScaffoldReadContract({
        contractName: "Staker",
        functionName: "withdrawalDeadline",
    });

    const { data: claimDeadline, isLoading: isClaimDeadlineLoading } = useScaffoldReadContract({
        contractName: "Staker",
        functionName: "claimDeadline",
    });

    return (
        <div className="card card-compact w-64 bg-secondary text-primary-content shadow-xl m-4">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Reward Rate per Second</h2>
                <div className="card-actions items-center flex-col gap-1 text-lg">
                    <h2 className="font-bold m-0">Current reward rate:</h2>
                    {isRewardRatePerSecondLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        <p className="m-0">{rewardRatePerSecond ? rewardRatePerSecond.toString() : 0}</p>
                    )}
                    <h2 className="font-bold m-0">withdrawalDeadline:</h2>
                    {isWithdrawalDeadlineLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        <p className="m-0">{withdrawalDeadline ? withdrawalDeadline.toString() : 0}</p>
                    )}
                    <h2 className="font-bold m-0">Claim Deadline:</h2>
                    {isClaimDeadlineLoading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        <p className="m-0">{claimDeadline ? claimDeadline.toString() : 0}</p>
                    )}
                </div>
            </div>
        </div>
    );
};