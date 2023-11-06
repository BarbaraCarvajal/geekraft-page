import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/UserMenu/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Panel de control -  Perfil"}>
      <div className="container-fluid m-3 p-3">
        <div className='row'>
          <div className='col-md-3'>
            <UserMenu />
          </div>
          <div className='col-md-3'>
            <h1>Tu Perfil</h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile