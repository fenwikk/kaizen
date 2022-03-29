import Link from 'next/link'
import Layout from '../components/Layout'
import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import Kaizen from "kaizen"

const kaizen = Kaizen()

export default kaizen.page

export const getServerSideProps = kaizen.getServerSideProps