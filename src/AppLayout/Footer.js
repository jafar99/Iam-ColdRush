import React from 'react'
import { Layout } from 'antd';
import '../CSS/Footer.css'

function Footer() {
    return (
        <div>

            <Layout className="layout">

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    )
}

export default Footer