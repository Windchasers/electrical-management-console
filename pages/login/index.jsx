import React, { Component } from 'react';
import Layout from '../../layouts/default'
import { useSession, signIn, signOut } from "next-auth/react"
import { Form, Input, Button, Checkbox } from 'antd';

const LoginForm = () => {
    const [form] = Form.useForm();

    const handleLogin = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success:', values);
            // signIn(values)
            await signIn("credentials", {
                redirect: true,
                ...values
              });
            // const list = await res.json();
            // console.log(list);
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
        // signIn()


        //   setDataSourceState(list.data );
        //   setLoading(false)
    }



    return (
        <Form form={form}>
            <Form.Item name="username" label="用户名">
                <Input />
            </Form.Item>
            <Form.Item name="password" label="密码">
                <Input type="password" />
            </Form.Item>
            <Form.Item>
                <Checkbox>Remember me</Checkbox>

                <Button type="primary" style={{ width: '100%' }} onClick={handleLogin}>
                    登陆
                </Button>
            </Form.Item>
        </Form>
    );
}


export default LoginForm;

LoginForm.getLayout = function getLayout(page) {
    return (
        <div>
            {page}
        </div>
    )
}