<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Dasturlash $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="dasturlash-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'Nomi')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'malumoti')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'rasm')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'narxi')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
