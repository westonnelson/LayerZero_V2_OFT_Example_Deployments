import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const arbitrumContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'MyOFT',
}

const baseContract: OmniPointHardhat = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'MyOFT',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: arbitrumContract,
        },
        {
            contract: baseContract,
        },
    ],
    connections: [
        {
            from: arbitrumContract,
            to: baseContract,
        },
        {
            from: baseContract,
            to: arbitrumContract,
        },
    ],
}

export default config
