import { Outlet } from 'react-router-dom';
import { Navigation } from '../Pages/Nav/Nav';
export function MainLayout() {

    // Her skal der ligge det som skal vises alle pages
    // Navigationen skal vises på alle sider

    return (
        <>
            <Navigation/>
            <Outlet />
        </>

    )
}