import { lazy } from 'react'

//Layouts:
import MarketLayout from '../components/layout/market-layout'
import GameLayout from '../components/layout/game-layout'

//Pages
const HomePage = lazy(() => import("./home"))
const DetailCollections = lazy(() => import("./detail-collections"))
const DetailNft = lazy(() => import("./detail-nft"))
const CreateNft = lazy(() => import("./create-nft"))
const LoginNft = lazy(() => import("./nft-login"))
const UpdateNft = lazy(() => import("./nft-update"))
const LoginGame = lazy(() => import("./game/login"))
const Table = lazy(() => import("./table"))

const routes = [
    {
        path: "/",
        exact: true,
        public: true,
        component: HomePage,
        layout: MarketLayout
    },
    {
        path: "/login",
        exact: true,
        public: true,
        component: LoginGame,
        layout: null
    },
    {
        path: "/collection/detail",
        exact: true,
        public: true,
        component: DetailCollections,
        layout: MarketLayout
    },
    {
        path: "/table",
        exact: true,
        public: true,
        component: Table,
        layout: MarketLayout
    },
    {
        path: "/nft/:id",
        exact: true,
        public: true,
        component: DetailNft,
        layout: MarketLayout
    },
    {
        path: "nft/create",
        exact: true,
        public: true,
        component: CreateNft,
        layout: MarketLayout
    },
    {
        path: "nft/login",
        exact: true,
        public: true,
        component: LoginNft,
        layout: MarketLayout
    },
    {
        path: "nft/update",
        exact: true,
        public: true,
        component: UpdateNft,
        layout: MarketLayout
    },
]

export default routes