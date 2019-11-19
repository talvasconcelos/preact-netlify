import { h } from "preact";
import style from "./style";

const Home = () => (
	<div class={style.home}>
		<div class={style.about}>
			<div class={style.imageContainer}>
				<div class={style.image} />
			</div>
			<div class={style.quote}>
				<div class={style.details}>
				A Bitcoin é uma nova forma de dinheiro, digital e independente de governos ou corporações mundiais. É difícil de confiscar, bloquear ou inflacionar e é fácil de enviar para qualquer parte do mundo. Em comparação com os meios de pagamento tradicionais, o custo de uma transação é mínimo. Tornando-se para muitos uma opção mais viável e segura. 
				</div>
			</div>
		</div>
		{/* <div class={style.bio}>
			<p class={style.bioleft}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut
				aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
				culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<p class={style.bioright}>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
				ab illo inventore veritatis et quasi architecto beatae vitae dicta
				sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
				aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
				dolorem ipsum quia dolor sit amet, consectetur.
			</p>
		</div> */}
	</div>
);

export default Home;
