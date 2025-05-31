import React from 'react'
import Image from 'next/image';
import {  IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';


const menuItems = [
/*    {
      path: '/dashboard/main',
      icon: <IoBrowsersOutline size={40} />,
      title: 'Dashboard',
      subTitle: 'Visualización'
    },
    {
      path: '/dashboard/counter',
      icon: <IoCalculator size={40} />,
      title: 'Counter',
      subTitle: 'Contador Client Side'
    },*/
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball size={40} />,
        title: 'Pokemons',
        subTitle: 'Generación Estática'
      },
      
    {
        path: '/dashboard/favorites',
        icon: <IoHeartOutline size={40} />,
        title: 'Favoritos',
        subTitle: 'Global State'
    },
  ]
  
  

export const Sidebar = () => {
    return (
        <div 
            id="menu" 
            style={{width:'400px'}}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0  overflow-y-scroll">
            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center  text-lg md:text-2xl font-bold text-white">
                    <IoLogoReact className='mr-2' />
                    <span> Poke</span> 
                    <span className="text-blue-500">Dashboard</span>.
                </h1>
                <p className="text-slate-500 text-sm">Manage your favorite pokemons</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span className="text-sm md:text-base font-bold">
                        User
                    </span>
                </a>
            </div>


            <div id="nav" className="w-full px-6">
            {
              menuItems.map( item => (
                  <SidebarMenuItem  key={ item.path } {...item} />
              ))
            }
                

                


            </div>
        </div>
    )
}
