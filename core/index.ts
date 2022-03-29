import { GetServerSideProps } from "next"
import KaizenCore, { DashboardProps, getServerSideProps } from "./core/core"

const Kaizen = (): { page: (props: DashboardProps) => JSX.Element, getServerSideProps: GetServerSideProps } => {
    return {
        page: KaizenCore,
        getServerSideProps
    }
}

export default Kaizen

