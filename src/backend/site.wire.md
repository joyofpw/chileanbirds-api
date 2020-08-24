# Site Structure

This would be the structure for the templates, fields and pages
inside _ProcessWire_.

```swift

@document {

    /**
    @once: Only one copy of this page can be created. Alias of {once:true}.
    @strong: Can be deleted only when all the children are deleted. Alias of {strong:true}.
    @root: Is the root of the page tree. Alias of {root:true}.
    @childless: Can not have children. Alias of {children:false}.
    @i18n: Can be multi lang enabled. Alias of {i18n:true}.
    @global: This input will be present in every page instance. Alias of {global:true}.
    @many: Can have any number of children. Alias of {many:true}.
    (!!): Repeats the last signature used.
    77 : Comment
    */

    @wire {
        @templates {
            home: template().options({@once, @strong, @root}),
            notfound: template().options({@once, @childless}).description("Used in 404 errors"),
            birds: template().options({@strong}).family({
                    parents: ["home"],
                    children: ["birds-item"]
            }),
            birds-item: template().options({@childless}).family({
                parents: ["birds"]
            })
        },

        @fields {

            title: text().options({@i18n, @global}),

            body: textarea().options({@i18n}),

            uid: text(),

            href: url(),

            file: files().max(1),

            migration: checkbox(),

            dimorfism: checkbox(),

            size: text(),

            order: text(),

            species: text(),

            image: images().max(1).mediatypes([@jpg, @png, @svg]),

            images: images().mediatypes([@jpg, @png, @svg]),

            value: text().options({@i18n}),

            habitat: textarea()
                    .description("Stores the habitat property")
                    .options({@i18n}),

            didyouknow: textarea()
                    .description("Stores the did you know property")
                    .options({@i18n}),

            iucn: pagetable()
                    .max(1)
                    .fields({
                        body: body().description("Stores the iucn description"),
                        value: value().description("Stores the iucn value")
                    }),

            audio: pagetable()
                    .max(1)
                    .fields({
                        file,
                        title
                    }),

            map: pagetable()
                .max(1)
                .fields({
                    image,
                    value
                }),


        },

        @pages {
            ++ "Home" (template:home) @many -> {
                ++ "Birds" (template:birds) @many -> {
                    ++ "Bird 1" (template:birds-item, fields: {
                        title: title().label("Names"),
                        body: body().label("Description").description("Stores the bird description"),
                        images,
                        habitat,
                        didyouknow,
                        iucn,
                        audio,
                        map,
                        species,
                        migration,
                        dimorfism
                    })
                    } // /birds
                } // /home
        } // /pages
    } // /wire
} // /document
```
