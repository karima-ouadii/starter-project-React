import React, { Component } from 'react'
import AuthContext from'../shared/auth/auth-context'

export default class DashboardPage extends Component {
    render() {
        return ( 
        < div className="text-center bg-primary">
Hi {this.context.currentUser.displayName}😇!!
            </div>
        )
    }
}
DashboardPage.contextType=AuthContext;