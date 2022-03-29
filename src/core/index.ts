import { GetServerSideProps, NextPage } from "next"
import KaizenCore, { getServerSideProps } from "./dashboard"

const Kaizen = (): { page: NextPage, getServerSideProps: GetServerSideProps } => {
    return {
        page: KaizenCore,
        getServerSideProps
    }
}

export default Kaizen

