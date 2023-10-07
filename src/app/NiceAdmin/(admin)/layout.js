//1. Import Area
import Header from '../../../../Components/Layouts/Header'
import Aside from '../../../../Components/Layouts/Aside'
import Footer from '../../../../Components/Layouts/Footer'

//2. defination area 
function AdminDashboardLayout({children,}) {
    return (
        <>
           <Header />
           <Aside />
   
           {children}
      
           <Footer />
        </>
    )
  }

//3.export area 
//3.1 default export
export default AdminDashboardLayout;