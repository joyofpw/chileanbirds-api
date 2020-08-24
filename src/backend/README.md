# Chilean Birds API

This is a simple API

## About ProcessWire

ProcessWire is a friendly and powerful open source CMS with an API that is a
joy to use at any scale. It is both a content management system (CMS) and
framework (CMF) built to save you time and work the way you do. With all custom
fields, a secure foundation, proven scalability and performance, ProcessWire
connects all of your content seamlessly, making your job fast, easy and fun.

ProcessWire gives you more control over your fields, templates and markup than
other platforms, while ProcessWire’s API makes working with your content easy and
enjoyable. Managing and developing a site in ProcessWire is shockingly simple
compared to what you may be used to.

ProcessWire is widely trusted by web professionals for its exceptional consistency,
stability and security; revered by web developers for its API that saves time and
makes work fun; valued by web designers for its adaptability and flexibility with
modern website/application content management needs; and loved by clients for its
no-nonsense interface and ease-of-use in adding, updating and maintaining content.
New versions of ProcessWire are released just about every week on the
development branch.

### Learn more

- [ProcessWire website](https://processwire.com)

## Site Structure

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
