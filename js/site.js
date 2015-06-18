var Site        = {

    init        : function () {
        Site._setHovers();
    },

    _setHovers  : function () {
        var item    = $( '.navigation-item .item-img' ),
            img     = $( '.navigation-item img' ),
            link;
        item.height( img.height() );
        $( '.navigation-item .link-center' ).css({
            bottom  : ( img.height() ) / 2
        });

        $( '.navigation-item' ).hover( function ( e ) {
            $( '.item-hover', e.currentTarget ).slideToggle( function () {
                link    = $( '.link-center.first', e.currentTarget );
                link.css({
                    bottom  : ( img.height() - link.height() ) / 2,
                    opacity : 1
                }).removeClass( 'first' );
            });
        });
    }
};

$( 'document' ).ready( Site.init );