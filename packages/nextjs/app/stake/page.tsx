import { StakingInfo } from "~~/components/StakingInfo";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";



export const metadata = getMetadata({
    title: "Staking",
    description: "Stake your ETH Here",
});

const Stake: NextPage = () => {
    return (
        <>
            <StakingInfo />
        </>
    );
};

export default Stake;



