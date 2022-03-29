import "antd/dist/antd.css"
import { GetServerSideProps } from "next";
import { useState } from "react";
import { CompareRoutes, RouteArrayToString } from "../utils";
import { NextRouter, useRouter } from "next/router";

import { Layout, Menu, Breadcrumb, Form, FormInstance } from 'antd';
import Link from "next/link";

import EmailPassword from "supertokens-node/recipe/emailpassword";
import { superTokensNextWrapper } from 'supertokens-node/nextjs'
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { SessionRequest } from "supertokens-node/framework/express";
import supertokensNode from "supertokens-node";

const { Header, Content, Footer, Sider } = Layout;

export type DashboardProps = {
    route: string[],
    user?: EmailPassword.User
    data: any[],
}

export type DashboardState<DataType> = {
    router: NextRouter,

    hasAccess: boolean,
    signedIn: boolean,

    menuCollapsed: boolean,


    data?: DataType
}

export type CardState<DataType> = {
    isEditing: boolean,
    deleted: boolean,
    created: boolean,

    unsavedData: DataType,
    data: DataType
}

const KaizenCore = (props: DashboardProps) => {
    const router = useRouter()
    const [state, setState] = useState<DashboardState<any>>( () => {
        let tempState: DashboardState<any> = { router: router, hasAccess: false, signedIn: false, menuCollapsed: true }
        return tempState
    } )

    const onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        setState({ 
            ...state,
            menuCollapsed: collapsed
        });
    };

    return (
    <Layout className="min-h-screen flex">
        <Sider className="min-h-screen">
        <div className="h-8 m-4 bg-blue-900 opacity-30" />
        <Menu theme="dark" mode="inline">
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
            <div>hi</div>
        </Menu>
        </Sider>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            hello
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright {new Date().getFullYear()} © Seabird Digital. All Rights Reserved.</Footer>
        </Layout>
    </Layout>
    );
}

export default KaizenCore;

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const seabird = ctx.params?.seabird
  
    if ((seabird == undefined || typeof(seabird) == "string") || seabird[0] != "dashboard") {
      return {
        notFound: true,
      };
    }
    else {
        let props: DashboardProps = { route: seabird, data: [] }

        return {
            props: props, // will be passed to the page component as props

        };
    }
}



