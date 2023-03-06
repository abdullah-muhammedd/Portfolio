// Header 
let bars = document.getElementById( 'bars' );
let nav = document.getElementById( 'nav' );
let header = document.getElementById( 'header' );
let state = false;
bars.addEventListener( 'click', () =>
{
    bars.classList.toggle( 'activeBars' );
    if ( state === true )
    {
        nav.classList.add( 'closeNav' );
        nav.classList.remove( 'openNav' );
        setTimeout( () =>
        {
            nav.style.visibility = 'hidden';
        }, 600 );

        state = false;
    }
    else
    {
        nav.style.visibility = 'visible';
        nav.classList.add( 'openNav' );
        nav.classList.remove( 'closeNav' );

        state = true;
    }

    header.classList.toggle( 'openHeader' );
} );
// End Header
// Start landing
const observer = new IntersectionObserver( ( entreis ) =>
{
    entreis.forEach( ( entry ) =>
    {
        entry.target.classList.toggle( 'landingShownItem', entry.isIntersecting );
    } );
} );
let landingHiddenItems = document.querySelectorAll( '.landingHiddenItem' );
landingHiddenItems.forEach( ( ele ) => observer.observe( ele ) );
// End Landing
