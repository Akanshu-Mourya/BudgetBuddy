import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from 'react'
import { Link } from "react-router-dom"

const SidebarAccordion = ({ title, icon: Icon, links, collapsed, effectClass,accordionEffact }) => {
  return (
    <Accordion type="single" collapsible >
                        <AccordionItem value={title}>
                            <AccordionTrigger className={effectClass}> 
                                <div className={effectClass}>

                                    <Icon size={24} /> {!collapsed && title}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent >
                               {
                                links.map((link, index) => (
                                    <Link key={index} to={link.path}className={accordionEffact}>
                                    {!collapsed && link.label}
                                </Link>
                                ))
                               }
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>
  )
}




const SidebarElement = ({title,collapsed,effectClass,icon:Icon ,links})=>{
    return(
        links.map((link, index) => ( 

            <Link key={index} to={link.path} className={effectClass}>
            <Icon size={24} /> {!collapsed && title}
        </Link>

        ))

     
    )
}


export {SidebarAccordion, SidebarElement}