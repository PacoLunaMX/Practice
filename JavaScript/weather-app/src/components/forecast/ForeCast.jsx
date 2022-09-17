import React from 'react'
import './forecast.css'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion"

function ForeCast({data}) {
    const WEEK_DAYS = ['Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday','Sunday']

    const dayInAWeek = new Date().getDay();
    const foreCastDay= WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

  return (
    <>
    <label  className='title'>Daily</label>
    <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item,idx)=>(
                
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img className='icon-small' src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                                <label className='day'>{foreCastDay[idx]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='description'>{item.main.temp_min} / {item.main.temp_max}</label>            
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='daily-detials-grid'>
                            <div className="daily-details-grid-item">
                                <label>Pressure</label>
                                <label>{item.main.pressure}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Humidity</label>
                                <label>{item.main.humidity}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Clouds</label>
                                <label>{item.clouds.all}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Wind Speed</label>
                                <label>{item.wind.speed}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Sea level</label>
                                <label>{item.main.sea_level}</label>
                            </div>
                            <div className="daily-details-grid-item">
                                <label>Feels like</label>
                                <label>{item.main.feels_like}</label>
                            </div>

                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        
    </Accordion>
 

    </>
  )
}

export default ForeCast