
import { GetServerSideProps, NextPage } from "next";
import { NextRouter } from "next/router";

import { Layout } from 'antd';

import EmailPassword from "supertokens-node/recipe/emailpassword";
import React from "react";

export type DashboardProps = {
    route: string[],
    user?: EmailPassword.User
    data: unknown[],
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

const KaizenCore: NextPage = () => {
    return (
        <div className="min-h-screen flex">
            sd
        </div>
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
        const props: DashboardProps = { route: seabird, data: [] }

        return {
            props: props, // will be passed to the page component as props

        };
    }
}



