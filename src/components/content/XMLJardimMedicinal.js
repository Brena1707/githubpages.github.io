import XMLParser from 'react-xml-parser'

const XMLJardimMedicinal = `<?xml version="1.0" encoding="UTF-8"?>
<Unscramble>
	<fase1>
		<Conteudo1>
			<Dica>Nome popular da Mentha pulegium, planta que recebeu seu nome devido a sua capacidade de afastar pulgas.</Dica>
			<PalavraAssoc>POEJO</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O poejo, possui propriedades medicinais auxiliando no tratamento dos mais diversos tipos de doenças relacionadas à ______.</Dica>
			<PalavraAssoc>PELE</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Principal componente químico encontrado no Capim-limão, muito utilizado na indústria de cosméticos.</Dica>
			<PalavraAssoc>CITRAL</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Outro nome pelo qual também é conhecida a Erva-doce.</Dica>
			<PalavraAssoc>ANIS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Nome popular da Malva sylvestris L, planta que possui flores azuis, roxas ou púrpuras, com pétalas grandes, três vezes maiores que o cálice.</Dica>
			<PalavraAssoc>MALVA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O xarope desta planta é extremamente popular no Brasil para o tratamento de tosses e outras doenças respiratórias.</Dica>
			<PalavraAssoc>GUACO</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O guaco, além de ser utilizado como xarope para o tratamento de tosses e outras doenças, é utilizado no tratamento contra o veneno das picadas de _____.</Dica>
			<PalavraAssoc>COBRA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>Planta com propriedades digestivas e aperitivas, sua ação se dá pelo estímulo à salivação e à produção de sucos gástricos.</Dica>
			<PalavraAssoc>LOSNA</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O ____  extraído da arruda não deve ser ingerido, mas pode ser utilizado nos cuidados sobre a pele.</Dica>
			<PalavraAssoc>CHÁ</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A arruda,  conhecida como “erva purificadora” usada na crendice popular para espantar ____ olhados e energias negativas.</Dica>
			<PalavraAssoc>MAUS</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>O Alecrim, é um ingrediente muito comum em cosméticos e quando usado na ____, ajuda no fortalecimento dos vasos capilares e do couro cabeludo.</Dica>
			<PalavraAssoc>PELE</PalavraAssoc>
		</Conteudo1>
		<Conteudo1>
			<Dica>A Cânfora, é uma planta que  devido suas propriedades medicinais é muito utilizada na fabricação de talco para os _____.</Dica>
			<PalavraAssoc>PÉS</PalavraAssoc>
		</Conteudo1>		
	</fase1>
	<fase2>
		<Conteudo2>
			<Dica>Nome popular da Salvia officinalis, planta que possui folhas aos pares, verde-acinzentadas e flores, conforme a variedade, de coloração azul, violeta, rosa ou branca.</Dica>
			<PalavraAssoc>SÁLVIA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O Alecrim, na Antiguidade era usada como método de preservação do ______ dos mortos.</Dica>
			<PalavraAssoc>CORPO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>A Arruda, é um ingrediente usado na produção da bebida italiana Candolini Grappa _____ e em outras bebidas alcoólicas.</Dica>
			<PalavraAssoc>RUTA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Nome popular da Ruta graveolens L, planta que possui muitos ramos com folhas ovais, pequenas e carnudas, de cor verde-acinzentada e flores pequenas e amarelas.</Dica>
			<PalavraAssoc>ARRUDA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Nome popular da Rosmarinus officinalis, planta que possui folhas lineares com uma coloração verde na parte superior e mais esbranquiçada na parte inferior.</Dica>
			<PalavraAssoc>ALECRIM</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Na Antiguidade, com uso da Arruda, as pessoas acreditavam que poderia combater qualquer tipo de doença, inclusive a Peste ______.</Dica>
			<PalavraAssoc>NEGRA</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>O consumo da planta Marcela é recomendado para pessoas que consomem muito _____, pois ajuda a diminuir consideravelmente os níveis de cafeína no sangue.</Dica>
			<PalavraAssoc>CAFÉ</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Planta que devido às suas propriedades alucinógenas foi proibida em diversos países, principalmente se o seu consumo for em forma de licor.</Dica>
			<PalavraAssoc>ABSINTO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>A Hortelã é considerada como principal ingrediente na indústria que produz produtos para a higiene bucal, como os ______ dentais.</Dica>
			<PalavraAssoc>CREMES</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>A Lavanda é  utilizada na fabricação de produtos para a higiene pessoal,principalmente para  o ______.</Dica>
			<PalavraAssoc>BANHO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>Nome popular da Passiflora edulis, conhecida como Maracujá,  também é  conhecida como flor da _____.</Dica>
			<PalavraAssoc>PAIXÃO</PalavraAssoc>
		</Conteudo2>
		<Conteudo2>
			<Dica>A cavalinha já chegou a possuir mais de 12 metros de _____ no período em que a Terra concentrava maiores taxas de carbono.</Dica>
			<PalavraAssoc>ALTURA</PalavraAssoc>
		</Conteudo2>		
	</fase2>
	<fase3>
		<Conteudo3>
			<Dica>A malva, devido à suas propriedades anti-inflamatórias é comumente utilizada no combate a dores de _________.</Dica>
			<PalavraAssoc>GARGANTA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Nome popular da Mentha viridis, planta que possui folhas de aroma bem característico e que raramente floresce. É muito utilizada como vermífugo.</Dica>
			<PalavraAssoc>LEVANTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Nome popular da Achyrocline satureioides, planta que possui folhas alongadas, finas, com muitos pelos revestido e de coloração amarelada.</Dica>
			<PalavraAssoc>MARCELA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Planta que recebeu este nome em homenagem a ninfa grega, Mellona, a protetora das abelhas.</Dica>
			<PalavraAssoc>MELISSA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>A origem desta planta homenageia a ninfa Menthe da mitologia grega. E é usada hoje em dia na fabricação de diversos produtos, principalmente aqueles voltados para a higiene bucal.</Dica>
			<PalavraAssoc>HORTELÃ</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Palavra do latim cujo significado é “lavar” que dá origem ao nome Lavanda.</Dica>
			<PalavraAssoc>LAVARE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O seu efeito _______ é a principal propriedade medicinal conhecida da Melissa.</Dica>
			<PalavraAssoc>CALMANTE</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O Absinto é usado como ingrediente principal de um ______ muito apreciado na Europa do século XIX.</Dica>
			<PalavraAssoc>DESTILADO</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>O chá desta planta é bom para quem possui diabetes já que ele reduz a concentração de açúcar no sangue.</Dica>
			<PalavraAssoc>CARQUEJA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Nome popular da Lavandula officinalis, planta que possui flores de cor azul ou violeta-lilás, pequenas e dispostas numa espiga.</Dica>
			<PalavraAssoc>LAVANDA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Nome popular da Artemisia camphorata, erva rasteira, de folhas profundamente recortadas, verde-acinzentadas.</Dica>
			<PalavraAssoc>CÂNFORA</PalavraAssoc>
		</Conteudo3>
		<Conteudo3>
			<Dica>Losna ou ______ é como popularmente ficou conhecida a Artemisia absinthium, nome que se popularizou após o seu alto consumo na forma de licor na Europa de XIX.</Dica>
			<PalavraAssoc>ABSINTO</PalavraAssoc>
		</Conteudo3>		
	</fase3>
	<fase4>
		<Conteudo4>
			<Dica>A Sálvia, devido a uma de suas propriedades medicinais já foi utilizada para tratar um dos efeitos do Mal de ________.</Dica>
			<PalavraAssoc>PARKINSON</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Outro nome pelo qual também é conhecido o Manjericão.</Dica>
			<PalavraAssoc>ALFAVACA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Devido suas características morfológicas peculiares, seu nome foi dado, pois remete a um rabo de cavalo. Um dos componentes em sua composição fortalece os tecidos conjuntivos do corpo e beneficia pacientes no tratamento de artrite.</Dica>
			<PalavraAssoc>CAVALINHA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Outro nome pelo qual também é conhecida a Erva-cidreira.</Dica>
			<PalavraAssoc>CITRONELA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>A malva, na crendice popular afasta os maus ________.</Dica>
			<PalavraAssoc>ESPÍRITOS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Outro nome pelo qual também é conhecida a Lavanda.</Dica>
			<PalavraAssoc>ALFAZEMA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Planta administrada em forma de extratos ou suplementos para o tratamento de doenças que agem no sistema nervoso, incluindo depressão, ansiedade e ataques de pânico.</Dica>
			<PalavraAssoc>MARACUJÁ</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Planta medicinal popular no Brasil utilizada no tratamento da insônia devido suas propriedades sedativas.</Dica>
			<PalavraAssoc>CAMOMILA</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Na culinária, é muito utilizado em ensopados, saladas, temperos para carnes e peixes e como acréscimo em molhos (principalmente o de tomate).</Dica>
			<PalavraAssoc>MANJERICÃO</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>O chá extraído da erva-cidreira traz _________ para o sistema nervoso.</Dica>
			<PalavraAssoc>BENEFÍCIOS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>A ingestão do chá de Cavalinha traz benefícios para os tecidos __________ do corpo.</Dica>
			<PalavraAssoc>CONJUNTIVOS</PalavraAssoc>
		</Conteudo4>
		<Conteudo4>
			<Dica>Nome popular da Sedum dendroideum, planta que possui folhas carnosas, lisas e brilhantes, de formato espatulado a oval, de cor verde a bronzeada.</Dica>
			<PalavraAssoc>BÁLSAMO</PalavraAssoc>
		</Conteudo4>
	</fase4>
	<fase5>
		<Conteudo5>
			<Dica>Outro nome pelo qual também é conhecida a Cavalinha.</Dica>
			<PalavraAssoc>ERVA-CANUDO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Outro nome pelo qual também é conhecido o Guaco.</Dica>
			<PalavraAssoc>CIPÓ DE COBRA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Outro nome pelo qual é conhecida a planta Melissa.</Dica>
			<PalavraAssoc>ERVA-CIDREIRA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Planta utilizada no preparo do “chá da estrada”. E que devido ao seu aroma acaba sendo muito confundida com a Melissa.</Dica>
			<PalavraAssoc>CAPIM LIMÃO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Outro nome pelo qual também é conhecido o Maracujá.</Dica>
			<PalavraAssoc>FLOR DA PAIXÃO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome popular dado ao destilado produzido a partir da planta Artemisia absinthium.</Dica>
			<PalavraAssoc>FADA VERDE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Planta que auxilia no tratamento de pessoas hipertensas.</Dica>
			<PalavraAssoc>ERVA-CIDREIRA</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome popular da Pimpinella anisum L, planta que possui flores pequenas na forma de buquês brancos com pequenos frutos secos de sabor adocicado e com cheiro forte.</Dica>
			<PalavraAssoc>ERVA-DOCE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome científico da Cymbopogon _______, conhecido como Capim Limão, possui folhas longas, com bordas cortantes e de coloração verde clara, exalando um forte odor de limão.</Dica>
			<PalavraAssoc>CITRATUS</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>A Sálvia é popularmente conhecida por ser a “planta da __________”.</Dica>
			<PalavraAssoc>LONGEVIDADE</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>O Alecrim é considerado um aliado no ________.</Dica>
			<PalavraAssoc>EMAGRECIMENTO</PalavraAssoc>
		</Conteudo5>
		<Conteudo5>
			<Dica>Nome científico da __________ officinalis, conhecida como Lavanda</Dica>
			<PalavraAssoc>LAVANDULA</PalavraAssoc>
		</Conteudo5>
	</fase5>
</Unscramble>`

var xml = new XMLParser().parseFromString(XMLJardimMedicinal);    // Assume xmlText contains the example XML

export function palavraJardimMedicinal(i, level) {
	const fase = 'fase' + level;
	const conteudo = 'Conteudo'+level
	var palavra = []
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('PalavraAssoc')[0].value)
	palavra.push(xml.getElementsByTagName('Unscramble')[0].getElementsByTagName(fase)[0].getElementsByTagName(conteudo)[i].getElementsByTagName('Dica')[0].value)
	
	return palavra;
}
