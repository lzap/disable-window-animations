
FILES=extension.js metadata.json README
DEST=disable-window-animations.zip

all: $(DEST)

clean: 
	rm $(DEST)

$(DEST): $(FILES)
	zip -9jl $(DEST) $(FILES)
