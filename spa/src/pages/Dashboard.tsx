import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard/dashboard.css';
import $ from 'jquery';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, Icon } from '@mui/material';

import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Nav } from 'reactstrap';

function initTabsNewAnim() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px",
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px",
        });
    });
}

$(document).ready(function () {
    setTimeout(function () {
        initTabsNewAnim();
    });
});

$(window).on("resize", function () {
    setTimeout(function () {
        initTabsNewAnim();
    }, 500);
});

$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
        initTabsNewAnim();
    });
});

$(document).ready(function ($) {
    var path = window.location.pathname.split("/").pop();
    if (path === "") {
        path = "index.html";
    }
    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    target.parent().addClass("active");
});

export const Dashboard = () => {
    return (
        <>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#">
                    HappyFit
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-center col-sm-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto justify-content-center">
                        <div className="hori-selector">
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);">
                                <i className="far fa-address-book"></i>
                                <LocalDrinkIcon />
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="javascript:void(0);">
                                <i className="far fa-clone"></i>
                                <FitnessCenterIcon />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="javascript:void(0);">
                                <i className="far fa-calendar-alt"></i>
                                <RestaurantIcon />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <Nav>
                        <div className="justify-content-center">
                            <a className="navbar-brand navbar-logo" href="#">
                                <NotificationsActiveIcon />
                            </a>
                        </div>
                        <div className="justify-content-center">
                            <Avatar src="https://pps.whatsapp.net/v/t61.24694-24/315862904_5834905263241221_4701548363938051001_n.jpg?ccb=11-4&oh=01_AdTYoNugX4zGrUoCoLNAk9WWYqhppYQOA_3b6_UhZ5NDQA&oe=6473BB52" />
                        </div>
                    </Nav>
                </div >
            </nav >

        </>
    );
};
