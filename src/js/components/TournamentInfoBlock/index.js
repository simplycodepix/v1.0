import React, { Component } from "react";

class TournamentInfoBlock extends React.Component {
	render() {
		return (
			<div className="tournament-info-block">
               <div className="left-big-col">
                   <ul>
                       <li>
                           <span>@Pipkin_Sergo</span>
                       </li>
                       <li>
                           <span className="yellow-text">Название стола:</span> Лучший стол
                       </li>
                       <li>
                           <span>Дата начала:</span> 21.05.2017, 21:00
                       </li>
                       <li>
                           <span>Тип:</span> 2 на вылет
                       </li>
                   </ul>
				</div>
                <div className="middle-big-col">
                    <ul>
                        <li>
                            <span className="yellow-text">ПРИЗОВОЙ ФОНД:</span>
                            <img src="dollar.png"/> 250
                        </li>
                        <li>
                            <span>Стоимость участия:</span>
                            <img src="dollar.png" /> 10
                        </li>
                        <li>
                           <span>Количество игроков:</span> 3/7
                       </li>
                       <li>
                           <span>Сервер:</span> Европа
                       </li>
                       <li>
                           Вы не участвуете
                       </li>
                    </ul>
                </div>
                <div className="right-small-col">
                    <a href="#"><i className="fa fa-search" aria-hidden="true"></i></a>
                </div>
			</div>

		);
	}
}

export default TournamentInfoBlock;