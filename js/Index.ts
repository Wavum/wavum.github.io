﻿window.onload = function()
{
    Index.Main();
}



class Index
{
    private static clock: Clock;
    private static search: Search;
    private static menubar: Menubar;



    public static Main(): void
    {
        this.removeEnableJavaScript();

        //Clock
        let clockParentDiv: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("clockParentDiv")[0];
        this.clock = new Clock(clockParentDiv);

        this.clock.Seperator = Config.ClockSeparator.Value;

        //Search
        let searchParentDiv: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("searchParentDiv")[0];
        this.search = new Search(searchParentDiv, Config.Homepage.Value, Config.QuickSearchHotkeyStart.Value, Config.QuickSearch.Value, Config.QuickSearchHotkeyEnd.Value);

        this.search.LinkStartsWith = Config.LinkStartsWith.Value;
        this.search.UseSearchSuggestions = Config.UseSearchSuggestions.Value;

        //Menubar
        let menubarParentDiv: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("menubarParentDiv")[0];
        this.menubar = new Menubar(menubarParentDiv);

        this.setColors();

        this.search.focus();

        //TODO: show current quicksearch
        //TODO: show help page
        //TODO: Show little popup ("search something...") on first start
		//TODO: Rework link detection
		//TODO: save visited websites and put them in the searchbox on search (but not in the searchsuggestion)
    }


	    
	private static removeEnableJavaScript(): void
    {
        document.getElementsByClassName("javascriptDiv")[0].remove();
    }

    private static setColors(): void
    {
        //Set body color
        document.body.style.backgroundColor = "#363636";

        //Set clock color
        this.clock.Color = Config.ShapeColor.Value;

        //Set search input color
        //FIXME: strange color on reload
        this.search.BorderColor = Config.ShapeColor.Value;
        this.search.FontColor = Config.ShapeColor.Value;

        //Set search suggestions color
        let searchSuggestions: SearchSuggestions = this.search.SearchSuggestions;

        searchSuggestions.BackgroundColorFocus = Config.ShapeColor.Value;

        //Set menubar color
        let sidebar: Sidebar = this.menubar.Sidebar;

        sidebar.ElementsBackgroundColorFocus = Config.ShapeColor.Value;
        sidebar.IconColor = Config.ShapeColor.Value;
    }
}