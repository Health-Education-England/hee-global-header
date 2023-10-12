setup-hee-prototypes:
	rm -rf hee-prototypes
	git clone git@github.com:Health-Education-England/hee-prototypes.git
	cd hee-prototypes && git checkout Enhancement/NWPS-1671-nhse-POC-visual-identity
	cd hee-prototypes && npm install && npm run build

serve-hee-prototypes:
	cd hee-prototypes && npm run build && npm run serve
