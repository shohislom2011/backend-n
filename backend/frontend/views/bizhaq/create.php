<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Bizhaq $model */

$this->title = 'Create Bizhaq';
$this->params['breadcrumbs'][] = ['label' => 'Bizhaqs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="bizhaq-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
